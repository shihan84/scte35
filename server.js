const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

const FLUSSONIC_API_URL = process.env.FLUSSONIC_API_URL || 'http://localhost:8080';
const FLUSSONIC_API_KEY = process.env.FLUSSONIC_API_KEY || ''; // Add your API key if needed

// Endpoint to insert SCTE-35 marker via Flussonic API
app.post('/api/insert-marker', async (req, res) => {
    const { streamName, markerType, ptsAdjustment, spliceEventId } = req.body;

    if (!streamName || !markerType) {
        return res.status(400).json({ error: 'Missing required parameters' });
    }

    // TODO: Replace with official Flussonic SCTE-35 insertion API endpoint and payload format
    // Current payload is a placeholder example
    const payload = {
        command: 'scte35',
        type: markerType,
        pts_adjustment: ptsAdjustment || 0,
        splice_event_id: spliceEventId || Date.now()
    };

    try {
        const flussonicApiUrl = `${FLUSSONIC_API_URL}/api/streams/${streamName}/scte35`;

        const response = await axios.post(flussonicApiUrl, payload, {
            headers: {
                'Authorization': `Bearer ${FLUSSONIC_API_KEY}`
            }
        });

        res.json({ message: 'SCTE-35 marker inserted (placeholder)', data: response.data });
    } catch (error) {
        console.error('Error inserting SCTE-35 marker:', error.message);
        res.status(500).json({ error: 'Failed to insert SCTE-35 marker' });
    }
});

app.listen(port, () => {
    console.log("SCTE-35 Marker Web GUI backend listening at http://localhost:" + port);
});
