import axios from 'axios';

const run = async (): Promise<void> => {
  for (let i = 0; i < 10; i += 1) {
    await axios.post('http://localhost:4000/api/metrics', {
      teamId: 'team-alpha',
      sprintVelocity: 30 + i,
      cycleTimeHours: 20 + i,
      deploymentFrequency: 5,
      defectEscapeRate: 0.05
    });
  }
};

run();
