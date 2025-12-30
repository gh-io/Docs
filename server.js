app.listen(8200, () => {
  console.log("Service running on http://localhost:8200");
});
GET http://localhost:8200/api/status
{
  "service": "backend",
  "status": "running"
}
