Go to https://swgoh.gg/api/guild-profile/NKLPQHywSoGFQ2EDBV2CNQ/
Paste results into ./guildData.json
Run the command `src/guild/ers/getMembers.mjs src/guild/ers/guildData.json src/guild/ers/membersList.json`
For each member in memberList.json, go to `https://swgoh.gg/api/player/{ally_code}/`
Create/Update/Delete a respective .json file in erc/members
Run the command `node src/guild/ers/trim-members.mjs`
Commit and Deploy
