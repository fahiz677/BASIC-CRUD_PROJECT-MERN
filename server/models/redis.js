// import redis from 'redis';


// export const connection=()=>{
//     const redisConnect=async()=>{
//         const client = redis.createClient()
//         client.on('error', err => console.log('Redis Client Error', err));
//         client.connect().then(()=>{
//           console.log("Redis connected successfully")
//         }).catch((err)=>{
//           console.log(err)
//         })
//         return client
//     }

//     return {
//         redisConnect
//     }
// }