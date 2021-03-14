function doGet(e) {
  return HtmlService.createTemplateFromFile("index").evaluate()
}

const getConnections = () => {
  let connections = []
  const personFieldsList = "addresses,ageRanges,biographies,birthdays,calendarUrls,clientData,coverPhotos,emailAddresses,events,externalIds,genders,imClients,interests,locales,locations,memberships,metadata,miscKeywords,names,nicknames,occupations,organizations,phoneNumbers,photos,relations,sipAddresses,skills,urls,userDefined"
  let options = { personFields: personFieldsList, sortOrder: "LAST_NAME_ASCENDING", pageSize: 1000, pageToken: null }
  do {
    const pageOfResults = People.People.Connections.list("people/me", options)
    connections.push.apply(connections, pageOfResults.connections)
    options.pageToken = pageOfResults.nextPageToken
  } while (options.pageToken != null)
  console.log(connections.length)
  return JSON.stringify(connections,null,2)
}
