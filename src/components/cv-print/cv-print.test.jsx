// cv-print.test.jsx

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CvPrint from './cv-print.jsx';

describe('CvPrint component', () => {
  it('displays general info correctly', () => {
    const mockGeneralInfo = {
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      aboutMe: '<p>This is about me</p>',
    };

    render(
      <CvPrint
        generalInfo={mockGeneralInfo}
        educationList={[]}
        workList={[]}
        skillList={[]}
      />
    );

    // Check general info display
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/john.doe@example.com/i)).toBeInTheDocument();
    expect(screen.getByText(/123-456-7890/i)).toBeInTheDocument();
    expect(screen.getByText(/This is about me/i)).toBeInTheDocument();
  });

  it('displays education list correctly', () => {
    const mockEducationList = [
      { school: 'ABC University', degree: 'B.Sc', year: '2020' },
      { school: 'XYZ College', degree: 'M.Sc', year: '2022' },
    ];

    render(
      <CvPrint
        generalInfo={{}}
        educationList={mockEducationList}
        workList={[]}
        skillList={[]}
      />
    );

    // Check education list display
    expect(screen.getByText(/ABC University/i)).toBeInTheDocument();
    expect(screen.getByText(/B.Sc/i)).toBeInTheDocument();
    expect(screen.getByText(/2020/i)).toBeInTheDocument();
    expect(screen.getByText(/XYZ College/i)).toBeInTheDocument();
    expect(screen.getByText(/M.Sc/i)).toBeInTheDocument();
    expect(screen.getByText(/2022/i)).toBeInTheDocument();
  });

  it('displays work list correctly', () => {
    const mockWorkList = [
      { company: 'Company A', title: 'Developer', date: '2018-2020' },
      { company: 'Company B', title: 'Senior Dev', date: '2020-2022' },
    ];

    render(
      <CvPrint
        generalInfo={{}}
        educationList={[]}
        workList={mockWorkList}
        skillList={[]}
      />
    );

    // Check work list display
    expect(screen.getByText(/Company A/i)).toBeInTheDocument();
    expect(screen.getByText(/Developer/i)).toBeInTheDocument();
    expect(screen.getByText(/2018-2020/i)).toBeInTheDocument();
    expect(screen.getByText(/Company B/i)).toBeInTheDocument();
    expect(screen.getByText(/Senior Dev/i)).toBeInTheDocument();
    expect(screen.getByText(/2020-2022/i)).toBeInTheDocument();
  });

  it('displays skill list correctly', () => {
    const mockSkillList = [{ skill: 'JavaScript' }, { skill: 'React' }];

    render(
      <CvPrint
        generalInfo={{}}
        educationList={[]}
        workList={[]}
        skillList={mockSkillList}
      />
    );

    // Check skill list display
    expect(screen.getByText(/JavaScript/i)).toBeInTheDocument();
    expect(screen.getByText(/React/i)).toBeInTheDocument();
  });
});
