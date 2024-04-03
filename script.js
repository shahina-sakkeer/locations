var map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var locations = [
    { name: 'Banglore', machines: 5, coordinates: [12.9716, 77.5946] },
    { name: 'Delhi', machines: 3, coordinates: [28.7041, 77.1025] },
    { name: 'Mumbai', machines: 6, coordinates: [19.0760, 72.8777] },
    { name: 'Latvia', machines: 5, coordinates: [56.8796, 24.6032] },
    { name: 'UK', machines: 6, coordinates: [51.5074, -0.1278] },
    { name: 'Germany', machines: 6, coordinates: [51.1657, 10.4515] }
]

// marking up
var markers = L.markerClusterGroup();


locations.forEach(location => {
    const [lat, lng] = location.coordinates;

    // offsets of each points
    const offsetX = 0.001;
    const offsetY = 0.001;

    for (let i = 0; i < location.machines; i++) {
        const marker = L.marker([lat + (i * offsetY), lng + (i * offsetX)]).addTo(map);
        marker.bindTooltip((i + 1).toString(), {permanent: true, className: "number-label", offset: [0, 0] });
    }
    }
);

