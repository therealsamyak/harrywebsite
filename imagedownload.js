const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// Load the service account key from an environment variable or a file
const serviceAccountKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY || fs.readFileSync('harrywebsitekey.json', 'utf8');

// Initialize the Google Auth client
const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(serviceAccountKey),
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
});

// Initialize the Google Drive client
const drive = google.drive({ version: 'v3', auth });

async function downloadImages() {
  const folderId = '1xt9AcOdcBb7gLSWTQOsJTQgJU5OLXLvX';
  
  // Ensure the art_gallery directory exists
  const artGalleryPath = path.join('src/art_gallery');
  if (!fs.existsSync(artGalleryPath)) {
    fs.mkdirSync(artGalleryPath, { recursive: true });
  }

  const res = await drive.files.list({
    q: `'${folderId}' in parents and mimeType contains 'image/'`,
    fields: 'files(id, name)',
  });

  const files = res.data.files;

  if (!files.length) {
    console.log('No files found.');
    return;
  }

  for (const file of files) {
    const dest = fs.createWriteStream(path.join(artGalleryPath, file.name));
    const response = await drive.files.get(
      { fileId: file.id, alt: 'media' },
      { responseType: 'stream' }
    );

    response.data.pipe(dest);
    await new Promise((resolve, reject) => {
      dest.on('finish', resolve);
      dest.on('error', reject);
    });
    console.log(`Downloaded: ${file.name}`);
  }
}

downloadImages().catch(err => {
  console.error('Error downloading images:', err);
});
