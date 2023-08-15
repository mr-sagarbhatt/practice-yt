<samp>

[Node Docs](https://nodejs.org/en/docs)

`Youtube Channels For Node JS: Coder's Gyan, Code Improve`

[libuv](https://libuv.org/)

# Node

     Used to create web servers - we can also use library like express
        We can create a server using http module of node js - basically it controls the network of computer
        We have the access of req object which provides different major properties, res object which provides different major methods and using that we can get/ send details.
        Using req object we can get cookies, header, browser info
        Using res object we can get cookies, header, browser info

        By default any request come to the server is come up on port 80 which, we can change.
        Javascript can not perform networking tasks so, in node JS 'libuv' library is used to perform the network operations.
        Server passes network request to node js using libuv. libuv convert the request in req(instance of Incoming Messages) and res object and provide to node.
        All request are in format of bytes or streams.
        These requests trigger using EventEmitters.

## Inbuilt Modules:

[_**os**_](https://nodejs.org/api/os.html) - provides operating system-related utility methods and properties.

[_**cluster**_](https://nodejs.org/api/cluster.html) - Clusters of Node.js processes can be used to run multiple instances of Node.js that can distribute workloads among their application threads.

## External Modules:

[_**express**_](https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm) - Allows to set up middlewares to respond to HTTP Requests

### _for load testing:_

[_**load test**_](https://www.npmjs.com/package/loadtest) - Runs a load test on the selected HTTP or WebSockets URL.

`loadtest [-n requests] [-c concurrency] [-k] URL`

[_**auto cannon**_](https://www.npmjs.com/package/autocannon) - for load testing

## Cluster - (inbuilt NodeJS module used to run application in multiple child processes)

W3Schools: `The cluster module provides a way of creating child processes that runs simultaneously and share the same server port.
Node.js runs single threaded programming, which is very memory efficient, but to take advantage of computers multi-core systems, the Cluster module allows you to easily create child processes that each runs on their own single thread, to handle the load.`

    Node js is single threaded, so it uses single CPU core to execute the application. To utilize all CPU cores to run the application we can use cluster.
    So it create a fork(instance or copy) of application and assign it to all cores.
    We can get the benefit of it only if the application is CPU intensive.
    Used for CPU utilization and resiliency
    resiliency is just a fancy word for the ability of your system to recover from failures and continue operating.
    There are 2 types of processes: primary processes, child(worker) processes

### limitation:

    if stateful application - uses process memory to store data like user session
    become complex

### Solution:

    use stateless application - uses db, redis to store data

### Alternate:

- pm2 module (process manager for node js)
  - inbuilt cluster functionality for load balancing
  - start server on failure
  - provide logging, monitoring and clustering functionality

[_**cluster - logRocket**_](https://blog.logrocket.com/optimizing-node-js-app-performance-clustering/)

[_**Resiliency**_](https://blog.appsignal.com/2020/07/22/nodejs-resiliency-concepts-the-circuit-breaker.html)

[_**What does it mean by Javascript is single threaded language**_](https://medium.com/swlh/what-does-it-mean-by-javascript-is-single-threaded-language-f4130645d8a9)

#### pm2 commands

```
npm i pm2 -g -> To install pm2 globally
pm2 ls or pm2 list -> To list all active processes

pm2 start {node_server_file} -> To start process - Ex: pm2 start app.js
pm2 start {node_server_file} --name {name_of_process} -> To start process with specific name

pm2 log -> To check logs of all processes
pm2 log {process_id} or pm2 log {process_name} -> To check logs of particular process

pm2 stop {process_id} or pm2 stop {process_name} -> To stop particular process

pm2 restart {process_id} or pm2 restart {process_name} -> To restart particular process

pm2 kill -> To kill all processes
pm2 kill {process_id} or pm2 kill {process_name} -> To kill particular process

```

# Node With Typescript

## Requirements

- Install Globally

```
  npm i node (For node)
  npm i typescript -g (For typescript)
  npm i -g ts-node (To run typescript file directly, without this module first it will convert .ts file to .js and run it)
```

- Install in Project

```
Installing typescript as dev dependency:
    Install @types declaration packages which provides type definitions in the form of declaration file.
    It defines types for the typescript compiler.
    These declaration files(With .d.ts extension) are available for all libraries that were originally written in JS, not TS.
    - npm i -D typescript @types/node @types/express
```

- Check versions

```
node -v
npm -v
tsc -v
```

## Steps to create new nodeJS project with typescript

    npm init --y (Create node project)
    tsc --init (Add typescript config)
    npm i @types/node (To check node types) - To add typescript module @types/[module-name]

### Ways To run node project

1. Convert ts files to js and run js file

```
tsc (convert ts file to js)
node app.js
```

2. Convert to ts and run js file at same time

```
tsc app.ts app.js
```

3. Run typescript file directly

```
ts-node app.js -> If we are running with ts-node, in production it will take more memory, to resolve this we can add --transpile-only flag
ts-node --transpile-only app.js -> it will not take more memory
```

### Add Modules

    npm i nodemon express dotenv mongoose
    npm i -D typescript @types/node @types/express @types/mongoose - Installing typescript modules as dev dependency

</samp>
