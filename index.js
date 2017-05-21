/**
 * @see https://github.com/rekibnikufesin/resumeGenerator/blob/lesson_1/lambda
 * @param event
 * @param context
 */
var faker = require('faker')

exports.handler = function(event, context, callback) {
  var career = {}
  career.firstName = event.firstName
  career.lastName = event.lastName
  career.socialMediaName = getSocialMediaName()
  career.careerHistory = []
  for (var i = 0; i < 5; i++) {
    var company = {}
    company.companyName = getCompanyName()
    company.desc = getCompanyDesc()
    company.companyTitle = getTitle()
    company.startDate = getDate()
    company.city = getCity()
    company.state = getState()
    company.country = getCountry()
    career.careerHistory.push(company)
  }

  career.endorsements = []
  for (var i = 0; i < 20; i++) {
    career.endorsements.push(getEndorsement())
  }

  callback(null, 'handler callback success')
}

function getSocialMediaName() {
  return faker.internet.userName()
}

function getCompanyName() {
  return faker.company.companyName()
}

function getCompanyDesc() {
  return faker.company.bs()
}

function getTitle() {
  return (
    faker.company.bsAdjective() +
    ' ' +
    faker.company.bsAdjective() +
    ' ' +
    faker.company.bsNoun()
  )
}

function getDate() {
  return faker.date.past()
}

function getCity() {
  return faker.address.city()
}

function getState() {
  return faker.address.state()
}

function getCountry() {
  return faker.address.country()
}

function getEndorsement() {
  return faker.company.catchPhrase()
}
