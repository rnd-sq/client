import { exec, execSync } from "child_process";

function execute(command) {
    const proc = exec(command);

    proc.stderr.on('data', console.error);
    proc.stdout.on('data', console.log);

    return proc;
}

execSync("yarn build");
execute("npx lt --port 3000 --subdomain rnd-sq");
execute("yarn start");
