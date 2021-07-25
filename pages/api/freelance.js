export default function handler (req, res) {
  res.status(200).json({
    missions: [
      {
        label: 'Mission 1',
        url: '123456',
        tags: ['solidity', 'graphql', 'react.js', 'zk-snarks'],
        duration: 90,
        applicationDeadline: '2021-09-01',
        status: 'pending',
        applications: [],
        budget: 20,
        clientAddress: '0xeb13D7F5f1879799BAE6701aeC3378ABd810e796'
      }
    ]
  })
}
