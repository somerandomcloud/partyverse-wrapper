const getTeam = async (id, axios) => {
    let info = await axios({
        method: 'post',
        url: 'https://partyverse.app/api',
        data: { query: `query { team(id: ${id}) { name description owner { displayName slug description id avatar } isVerified iconUrl discordUrl twitterUrl instagramUrl }}` }
      })
	return info.data.data.team;
}

const getUser = async (handle, axios) => {
    let info = await axios({
        method: 'post',
        url: 'https://partyverse.app/api',
        data: { query: `query { userByHandle(handle: "${handle}") { displayName slug description id avatar characters { name avatarUrl id worldId } memberOfTeams { id } subscribedEvents { event { title description id game { id name } location tags teamId startsAt endsAt ageRating attachments} characterId } }}` }
      })
	return info.data.data.userByHandle;
}

const getEvent = async (id, axios) => {
	let info = await axios({
        method: 'post',
        url: 'https://partyverse.app/api',
        data: { query: `query { event(id: ${id}) { title description id game { id name } location tags teamId startsAt endsAt ageRating attachments } }` }
      })
	return info.data.data.event;
}

module.exports = {
    getTeam,
	getUser,
	getEvent,
}