# scte35
test
Build the Docker image:
docker build -t scte35-marker-webgui .

Run the Docker container:
docker run -p 3000:3000 -e FLUSSONIC_API_URL="http://your-flussonic-server:8080" -e FLUSSONIC_API_KEY="your_api_key" scte35-marker-webgui

This will start the web GUI backend and frontend accessible at http://localhost:3000 (or your VPS IP).

This completes the implementation and deployment setup for your SCTE-35 marker insertion tool.

If you need any further assistance or enhancements, please let me know.
