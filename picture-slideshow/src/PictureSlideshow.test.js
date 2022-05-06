import { fireEvent, render, screen } from '@testing-library/react';
import PictureSlideshow from './PictureSlideshow';
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('PictureSlideshow', () => {
    it('should display a picture description', () => {
        const testPictures = [
            {
                imageUrl: 'https://test.com/mtrainier.png',
                description: 'Mt. Rainier'
            }
        ];
        render(<PictureSlideshow pictures={testPictures} />);
        const description = screen.getByText('Mt. Rainier');
        expect(description).toBeInTheDocument();

        const paging = screen.getByText('1 of 1');
        expect(paging).toBeInTheDocument();
    });

    it('should display a picture description for multiple pictures', () => {
        const testPictures = [
            {
                imageUrl: 'https://test.com/mtrainier.png',
                description: 'Mt. Rainier'
            },
            {
                imageUrl: 'https://test.com/mthood.png',
                description: 'Mt. Hood'
            }
        ];
        render(<PictureSlideshow pictures={testPictures} />);
        fireEvent.click(screen.getByText('>'));

        const description = screen.getByText('Mt. Hood');
        expect(description).toBeInTheDocument();

        const paging = screen.getByText('2 of 2');
        expect(paging).toBeInTheDocument();
    });
});
