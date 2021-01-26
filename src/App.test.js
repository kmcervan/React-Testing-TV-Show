import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

import mockFetchShow from './api/fetchShow';
jest.mock('./api/fetchShow');

test('Renders without errors', ()=>{
    
    waitFor(() =>{(<App />); })
    
});

test('Renders season 2 data when button is clicked', async() =>{
    
    render(<App />);
    const Dropdown = await screen.findByText(/select a season/i);
    userEvent.click(Dropdown); 
    })    
    //Arrange: render app
    // waitFor(() =>{; })
    
    // userEvent.click(['select a season'])
    // expect(getByPlaceholderText("Select an option").value).toEqual("Select a season")
    
    // const season2 = screen.findByText(/season 2/i);
    // expect(season2).toBeInTheDocument();
    
    //Act: get data season 2 from api? and push button
    // Act(() => {
        
    // })
    
    //Assert: We should see a drop down menu with 4 options including 'season 4'
    
