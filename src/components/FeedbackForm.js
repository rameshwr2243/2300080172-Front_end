import React, { useState } from 'react';
import Feedback from './Feedback';

const FeedbackForm = () => {
  const [cName, setCname] = useState('');
  const [fName, setFname] = useState('');
  const [cSkills, setcSkills] = useState('Good');
  const [remarks, setRemarks] = useState('NA');
  const [data, setData] = useState([]);

  const storeCname = (event) => setCname(event.target.value);
  const storeFname = (event) => setFname(event.target.value);
  const storeCSkills = (event) => setcSkills(event.target.value);
  const storeRemarks = (event) => setRemarks(event.target.value);

  const sendData = () => {
    const newFeedback = { cName, fName, cSkills, remarks };
    setData([...data, newFeedback]);
    setCname('');
    setFname('');
    setcSkills('Good');   
    setRemarks('NA');
  };

  return (
    <div>
      <h2>Feedback Form</h2>
      <table>
        <tbody>
          <tr>
            <td>Course Name:</td>
            <td><input type="text" value={cName} onChange={storeCname} /></td>
          </tr>
          <tr>
            <td>Faculty:</td>
            <td><input type="text" value={fName} onChange={storeFname} /></td>
          </tr>
          <tr>
            <td>Communication Skills:</td>
            <td>
              <select value={cSkills} onChange={storeCSkills}>
                <option value="Good">Good</option>
                <option value="Average">Average</option>
                <option value="Poor">Poor</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Remarks:</td>
            <td><input type="text" value={remarks} onChange={storeRemarks} /></td>
          </tr>
          <tr>
            <td colSpan="2">
              <button onClick={sendData}>Submit</button>
            </td>
          </tr>
        </tbody>
      </table>
      <Feedback data={data} />
    </div>
  );
};

export default FeedbackForm;
