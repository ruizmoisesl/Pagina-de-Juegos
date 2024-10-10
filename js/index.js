const user = 'huvdfmpteqyefy0pwj06fv9b98z5vf'
const token = 'vg8ei03j84xuuk5ayf5ihk5pf6b72k'
const auth = `https://id.twitch.tv/oauth2/token?client_id=${user}&client_secret=${token}&grant_type=client_credentials`
fetch(
    "https://api.igdb.com/v4/age_ratings",
    { 
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Client-ID': `${user}`,
        'Authorization': `${token}`,
      },
      body: "fields category,checksum,content_descriptions,rating,rating_cover_url,synopsis;",
      mode: 'cors'
  })
    .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok');
        }
    })
    .then(data => console.log(data))
    .catch(err => console.error(err));