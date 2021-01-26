import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Episodes from './Episodes';

const episodes = [
    {
        episode_name: "Thaicom",
        episode_season: "9D1B7E0"
    },
    {
        episode_name: "Telstar",
        episode_season: "F4F83DE"
    }
];

test('renders without errors', ()=>{
    render(<Episodes episodes={[]}/>);
});

test('renders change in episodes list correctly', ()=>{
    const { rerender } = render(<Episodes episodes={[]}/>);

    let episodesObjects = screen.queryAllByTestId('mission');
    expect(episodesObjects).toStrictEqual([]);
    expect(episodesObjects).toHaveLength(0);

    rerender(<Episodes episodes={episodes}/>);
    
    episodesObjects = screen.queryAllByTestId('epis');
    expect(episodesObjects).toHaveLength(2);
});