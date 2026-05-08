// ============================================
// AR Skulptur-Konfiguration
// Ändra dessa värden för att anpassa upplevelsen
// ============================================

const AR_CONFIG = {
    // 3D-modell
    model: {
        path: 'assets/sculpture.glb',      // Vägen till din .glb-fil
        scale: 0.5,                         // Skala (0.5 = liten, 1 = normal, 2 = stor)
        positionX: 0,                       // X-position (vänster/höger)
        positionY: 2,                       // Y-position (höjd - 2 är lagom högt för "svävande")
        positionZ: 0                        // Z-position (fram/bak)
    },

    // Rotation
    rotation: {
        enabled: true,                      // Ska modellen rotera?
        speed: 0.003,                       // Rotationshastighet (0.001 = långsam, 0.005 = snabb)
        autoRotateX: false,                 // Rotera på X-axeln?
        autoRotateY: true,                  // Rotera på Y-axeln?
        autoRotateZ: false                  // Rotera på Z-axeln?
    },

    // Ljus
    lighting: {
        ambientLight: 0.6,                  // Bakgrundsljus-intensitet (0-1)
        directionalLight: 0.8,              // Sol-ljus intensitet (0-1)
        directionalLightX: 5,               // Sol-ljus position X
        directionalLightY: 10,              // Sol-ljus position Y
        directionalLightZ: 5,               // Sol-ljus position Z
        pointLight: 0.3                     // Punkt-ljus intensitet (0-1)
    },

    // Kamera
    camera: {
        fov: 75,                            // Synfält (30-120)
        near: 0.1,                          // Nära plan
        far: 1000                           // Långt plan
    },

    // UI/Text
    ui: {
        title: '📱 AR Skulptur',            // Rubrik
        instruction: 'Peka kameran mot en byggnad för att se den virtuella skulpturen sväva över den!',
        loadingText: 'Laddar AR-upplevelse...',
        infoTitle: '✓ AR Aktiv',
        infoText: 'Skulpturen är synlig i AR-vyn.'
    },

    // 8th Wall (om du inte använder det globala XR-objektet)
    eighthWall: {
        enabled: true,                      // Använd 8th Wall?
        requireHttps: true                  // Kräv HTTPS? (false för localhost)
    }
};

// ============================================
// Exportera konfigurationen
// ============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AR_CONFIG;
}
