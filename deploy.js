const { exec } = require('child_process');

// Read the passphrase from the environment variable
const passphrase = process.env.COMMIT_PASSPHRASE;

// Execute the deploy command and pass the passphrase
const deployCommand = `npm run deploy`;

const options = {
    env: { ...process.env, COMMIT_PASSPHRASE: passphrase }
  };

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
