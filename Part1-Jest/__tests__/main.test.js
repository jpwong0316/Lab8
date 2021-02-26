const formatVolumeIconPath = require('../assets/scripts/main');

describe('volume icon', () => {
    test('high volume', () => {
        expect(formatVolumeIconPath(70)).toBe('./assets/media/icons/volume-level-3.svg');
    });
    test('medium volume', () => {
        expect(formatVolumeIconPath(40)).toBe('./assets/media/icons/volume-level-2.svg');
    });
    test('low volume', () => {
        expect(formatVolumeIconPath(10)).toBe('./assets/media/icons/volume-level-1.svg');
    });
    test('no volume', () => {
        expect(formatVolumeIconPath(0)).toBe('./assets/media/icons/volume-level-0.svg');
    });
});