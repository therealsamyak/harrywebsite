const { exec } = require('child_process');

// Read the passphrase from the environment variable
const passphrase = process.env.COMMIT_PASSPHRASE;

// Execute the deploy command and pass the passphrase
const deployCommand = `echo "${passphrase}" | npm run deploy`;

exec(deployCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error during deployment: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Deployment stderr: ${stderr}`);
    return;
  }
  console.log(`Deployment stdout: ${stdout}`);
});
