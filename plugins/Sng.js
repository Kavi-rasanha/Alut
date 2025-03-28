const yts = require('yt-search');
const ytdl = require('ytdl-core');
const { cmd } = require('../command');

cmd({
  pattern: 'song1',
  alias: ['ytsearch', 'yts'],
  desc: 'Search and download YouTube audio by song name.',
  category: 'utility',
  use: '.song <song name>',
  filename: __filename,
}, async (conn, mek, msg, { from, args, reply }) => {
  try {
    const query = args.join(" ");
    if (!query) {
      return reply('*සින්දුවේ නමක් දෙන්න 🙃*');
    }

    const searchResults = await yts(query);
    if (!searchResults.videos.length) {
      return reply('*ප්‍රතිඵලයක් හමු නොවිණි.*');
    }

    const video = searchResults.videos[0]; // First result
    const ytUrl = video.url;
    const title = video.title;

    const audioFormat = ytdl.chooseFormat(await ytdl.getInfo(ytUrl), { quality: 'highestaudio' });

    await conn.sendMessage(from, {
      audio: { url: audioFormat.url },
      mimetype: 'audio/mp4',
      ptt: false,
      caption: `🎵 *Title*: ${title}\n🔗 *URL*: ${ytUrl}\n\n> *Powered by Kavi-MD*`
    });

  } catch (error) {
    console.error('Error downloading YouTube song:', error);
    reply('❌ Unable to find or download the song. Please try again later.');
  }
});
