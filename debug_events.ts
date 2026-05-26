import { fetchUpcomingEvents } from './src/services/calendarService.js';

async function test() {
    const events = await fetchUpcomingEvents(3, 'primary', 14); // wait, need API key, actually I can just run a curl command.
}
test();
