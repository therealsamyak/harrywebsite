const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();
const fs = require('fs');
const path = require('path');  // Add this line to import the path module

// Read the passphrase from the environment variable or a local file
const passphrase = process.env.COMMIT_PASSPHRASE || fs.readFileSync('local-passphrase.txt', 'utf8').trim();

async function deploy() {
  try {
    await ssh.connect({
      host: '45.55.197.143',
      username: 'root',
      password: passphrase
    });

    console.log('SSH Connection established.');

    // Upload the build directory to the remote server
    await ssh.putDirectory('build', '/var/www/html/', {
      recursive: true,
      concurrency: 1,
      // validate: function(itemPath) {
      //   const baseName = path.basename(itemPath);
      //   return baseName.slice(0, 1) !== '.' && baseName !== 'node_modules'; // do not allow dot files
      // },
      tick: function(localPath, remotePath, error) {
        if (error) {
          console.error(`Failed to transfer ${localPath}: ${error}`);
        } else {
          console.log(`Successfully transferred ${remotePath}`);
        }
      }
    });

    console.log('Deployment completed successfully.');
  } catch (error) {
    console.error(`Error during deployment: ${error.message}`);
  } finally {
    ssh.dispose();
  }
}

deploy();
