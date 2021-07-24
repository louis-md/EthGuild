export default function handler (req, res) {
  res.status(200).json({
    missions: [{ label: 'Mission 1', url: '123456' }]
  })
}
