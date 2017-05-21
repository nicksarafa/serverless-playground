/**
 * @see
 * @param event
 * @param context
 */
exports.handler = function(event, context) {
  var career = {}
  career.firstName = event.firstName
  career.lastName = event.lastName
  career.workHistory = [
    {
      companyName: 'Brekke Group',
      desc: 'vertical benchmark communities',
      Title: 'interactive proactive architectures',
      startDate: '2015-01-05T08:03:31.918Z',
      city: 'Thompson shire',
      state: 'Nebraska',
      country: 'Madagascar',
    },
    {
      companyName: 'Padberg LLC',
      desc: 'best-of-breed transition deliverables',
      Title: 'real-time end-to-end content',
      startDate: '2014-10-03T16:29:00.600Z',
      city: 'Kuhn chester',
      state: 'Utah',
      country: 'Micronesia',
    },
    {
      companyName: 'Corwin, MacGyver and Bartell',
      desc: 'efficient brand content',
      Title: 'enterprise cross-media content',
      startDate: '2015-01-28T18:38:26.371Z',
      city: 'New Morton mouth',
      state: 'Alaska',
      country: 'Belgium',
    },
    {
      companyName: 'Kerluke, Wiegand and Stiedemann',
      desc: 'robust utilize communities',
      Title: 'distributed B2C technologies',
      startDate: '2015-02-18T07:36:57.869Z',
      city: 'Port Carlotta ton',
      state: 'Louisiana',
      country: 'Brunei Darussalam',
    },
    {
      companyName: 'Klein, Stoltenberg and Moore',
      desc: 'B2B evolve e-markets',
      Title: 'world-class out-of-the-box supply-chains',
      startDate: '2015-08-10T10:25:22.781Z',
      city: 'Emilie shire',
      state: 'Nevada',
      country: 'United Arab Emirates',
    },
  ]
  context.succeed(career)
}
