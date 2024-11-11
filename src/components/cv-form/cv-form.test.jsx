import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import CvForm from './cv-form.jsx';

describe('CVForm component', () => {
  it('has values for general info', () => {
    const mockGeneralInfo = {
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
    };

    render(
      <CvForm
        generalInfo={mockGeneralInfo}
        setGeneralInfo={() => {}}
        educationList={[]}
        setEducationList={() => {}}
        workList={[]}
        setWorkList={() => {}}
        skillList={[]}
        setSkillList={() => {}}
      />
    );

    // Check general info display
    expect(screen.getByLabelText(/Full Name/i).value).toBe('John Doe');
    expect(screen.getByLabelText(/Email/i).value).toBe('john.doe@example.com');
    expect(screen.getByLabelText(/Phone/i).value).toBe('123-456-7890');
  });

  it('has values for education list', () => {
    const mockEducationList = [
      { school: 'ABC University', degree: 'B.Sc', year: '2020' },
      { school: 'XYZ College', degree: 'M.Sc', year: '2022' },
    ];

    render(
      <CvForm
        generalInfo={{}}
        setGeneralInfo={() => {}}
        educationList={mockEducationList}
        setEducationList={() => {}}
        workList={[]}
        setWorkList={() => {}}
        skillList={[]}
        setSkillList={() => {}}
      />
    );

    // Check education list display
    expect(screen.getByDisplayValue(/ABC University/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/B.Sc/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/2020/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/XYZ College/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/M.Sc/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/2022/i)).toBeInTheDocument();
  });

  it('has values for work list', () => {
    const mockWorkList = [
      { company: 'Company A', title: 'Developer', date: '2018-2020' },
      { company: 'Company B', title: 'Senior Dev', date: '2020-2022' },
    ];

    render(
      <CvForm
        generalInfo={{}}
        setGeneralInfo={() => {}}
        educationList={[]}
        setEducationList={() => {}}
        workList={mockWorkList}
        setWorkList={() => {}}
        skillList={[]}
        setSkillList={() => {}}
      />
    );

    // Check work list display
    expect(screen.getByDisplayValue(/Company A/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/Developer/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/2018-2020/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/Company B/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/Senior Dev/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/2020-2022/i)).toBeInTheDocument();
  });

  it('has values for skill list', () => {
    const mockSkillList = [{ skill: 'JavaScript' }, { skill: 'React' }];

    render(
      <CvForm
        generalInfo={{}}
        setGeneralInfo={() => {}}
        educationList={[]}
        setEducationList={() => {}}
        workList={[]}
        setWorkList={() => {}}
        skillList={mockSkillList}
        setSkillList={() => {}}
      />
    );

    // Check skill list display
    expect(screen.getByDisplayValue(/JavaScript/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/React/i)).toBeInTheDocument();
  });

  it('adds a new education entry when "Add Education" button is clicked', () => {
    const mockEducationList = [
      { school: 'ABC University', degree: 'B.Sc', year: '2020' },
      { school: 'XYZ College', degree: 'M.Sc', year: '2022' },
    ];

    const setEducationList = vi.fn();

    const { getByText, getAllByPlaceholderText, rerender } = render(
      <CvForm
        generalInfo={{}}
        setGeneralInfo={() => {}}
        educationList={mockEducationList}
        setEducationList={setEducationList}
        workList={[]}
        setWorkList={() => {}}
        skillList={[]}
        setSkillList={() => {}}
      />
    );

    fireEvent.click(getByText(/Add Education/i));

    // Simulate state update
    const updatedEducationList = [
      ...mockEducationList,
      { school: '', degree: '', year: '' },
    ];
    rerender(
      <CvForm
        generalInfo={{}}
        setGeneralInfo={() => {}}
        educationList={updatedEducationList}
        setEducationList={setEducationList}
        workList={[]}
        setWorkList={() => {}}
        skillList={[]}
        setSkillList={() => {}}
      />
    );

    expect(setEducationList).toHaveBeenCalled();
    expect(getAllByPlaceholderText(/School/i).length).toBe(
      mockEducationList.length + 1
    );
  });

  it('adds a new work entry when "Add Work Experience" button is clicked', () => {
    const mockWorkList = [
      { company: 'Company A', title: 'Developer', date: '2018-2020' },
      { company: 'Company B', title: 'Senior Dev', date: '2020-2022' },
    ];

    const setWorkList = vi.fn();

    const { getByText, getAllByPlaceholderText, rerender } = render(
      <CvForm
        generalInfo={{}}
        setGeneralInfo={() => {}}
        educationList={[]}
        setEducationList={() => {}}
        workList={mockWorkList}
        setWorkList={setWorkList}
        skillList={[]}
        setSkillList={() => {}}
      />
    );

    fireEvent.click(getByText(/Add Work Experience/i));

    // Simulate state update
    const updatedWorkList = [
      ...mockWorkList,
      { company: '', title: '', date: '' },
    ];
    rerender(
      <CvForm
        generalInfo={{}}
        setGeneralInfo={() => {}}
        educationList={[]}
        setEducationList={() => {}}
        workList={updatedWorkList}
        setWorkList={setWorkList}
        skillList={[]}
        setSkillList={() => {}}
      />
    );

    expect(setWorkList).toHaveBeenCalled();
    expect(getAllByPlaceholderText(/Company/i).length).toBe(
      mockWorkList.length + 1
    );
  });

  it('adds a new skill entry when "Add Skill" button is clicked', () => {
    const mockSkillList = [{ skill: 'JavaScript' }, { skill: 'React' }];

    const setSkillList = vi.fn();

    const { getByText, getAllByPlaceholderText, rerender } = render(
      <CvForm
        generalInfo={{}}
        setGeneralInfo={() => {}}
        educationList={[]}
        setEducationList={() => {}}
        workList={[]}
        setWorkList={() => {}}
        skillList={mockSkillList}
        setSkillList={setSkillList}
      />
    );

    fireEvent.click(getByText(/Add Skill/i));

    // Simulate state update
    const updatedSkillList = [...mockSkillList, { skill: '' }];
    rerender(
      <CvForm
        generalInfo={{}}
        setGeneralInfo={() => {}}
        educationList={[]}
        setEducationList={() => {}}
        workList={[]}
        setWorkList={() => {}}
        skillList={updatedSkillList}
        setSkillList={setSkillList}
      />
    );

    expect(setSkillList).toHaveBeenCalled();
    expect(getAllByPlaceholderText(/Skill/i).length).toBe(
      mockSkillList.length + 1
    );
  });
});
