const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Evil,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function Evil_Pair() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Evil = Evil ({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Windows)", "", ""]
             });
             if(!Hamza.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Evil.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Hamza.ev.on('creds.update', saveCreds)
            Hamza.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Evil.sendMessage(Evil.user.id, { text: 'Evil;;;' + b64data });

               let Evil_MD_TEXT = `
*_EVIL-MD is Sucessfully linked with your WhatsApp!_* \n\n *Repo Link:* https://github.com/Mrunknown54/EVIL-MD/ \n\n *WhatsApp Channel:* https://whatsapp.com/channel/0029Va8TzeF0AgW8dVET3U1w \n\n *Onwer Number:* wa.me/923319709781 \n
*Thanks for choosing EVIL-MD created by _Dark Evil_ (Rahman Tech)*\n\n \t\t\t\t*Have a Nice Day:)*`
 await Evil.sendMessage(Evil.user.id,{text: Evil_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Evil.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(9000000000000000000000000000000000000);
                    Evil_Pair();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await Evil_Pair()
});
module.exports = router 
