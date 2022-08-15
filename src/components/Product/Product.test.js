import { __esModule } from '@testing-library/jest-dom/dist/matchers';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import mockResponse from "../../resources/mockResponse.json"
import App from '../../App';


const server = setupServer(
    rest.get('https://www.blibli.com/backend/search/products', (req, res, ctx) => {
        return res(
            ctx.json(mockResponse));
    }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


test('products should be rendered on page load', async () => {
    const {container} = render(<App />);

    const inputElement = screen.getByRole("searchbox");
    const value = "samsung";
    fireEvent.change(inputElement, { target: { value: value } });

    await waitFor(() => {
        expect(container.getElementsByClassName("cart-button").length).toBe(24);
    })
})
