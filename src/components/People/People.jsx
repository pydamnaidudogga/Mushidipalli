import './People.css';
import React, { useState } from 'react';

const employeesData = [
  { id: 1, name: 'Dogga Pydamnaidu',
  designation:'farmer',
  avatar:'https://img.myloview.com/murals/default-avatar-profile-icon-vector-social-media-user-image-700-205124837.jpg'
  },
  { id: 2, name: 'Jane Smith',
  designation:'farmer',
  avatar:'https://img.myloview.com/murals/default-avatar-profile-icon-vector-social-media-user-image-700-205124837.jpg' },
  { id: 3, name: 'Michael Johnson',
  designation:'farmer',
  avatar:'https://img.myloview.com/murals/default-avatar-profile-icon-vector-social-media-user-image-700-205124837.jpg' },
  { id: 4, name: 'John Doe',
  designation:'farmer',
  avatar:'https://img.myloview.com/murals/default-avatar-profile-icon-vector-social-media-user-image-700-205124837.jpg' },
  { id: 5, name: 'Jane Smith' ,
  designation:'farmer',avatar:'https://img.myloview.com/murals/default-avatar-profile-icon-vector-social-media-user-image-700-205124837.jpg'},
  { id: 6, name: 'Michael Johnson',
  designation:'farmer',avatar:'https://img.myloview.com/murals/default-avatar-profile-icon-vector-social-media-user-image-700-205124837.jpg' },
  { id: 7, name: 'John Doe',
  designation:'farmer',avatar:'https://img.myloview.com/murals/default-avatar-profile-icon-vector-social-media-user-image-700-205124837.jpg' },
  { id: 8, name: 'Jane Smith',
  designation:'farmer', avatar:'https://img.myloview.com/murals/default-avatar-profile-icon-vector-social-media-user-image-700-205124837.jpg' },
  { id: 9, name: 'Michael Johnson',
  designation:'farmer', avatar:'https://img.myloview.com/murals/default-avatar-profile-icon-vector-social-media-user-image-700-205124837.jpg' },
  { id: 10, name: 'John Doe',
  designation:'farmer', avatar:'https://img.myloview.com/murals/default-avatar-profile-icon-vector-social-media-user-image-700-205124837.jpg' },
  { id: 11, name: 'Jane Smith',
  designation:'farmer', avatar:'https://img.myloview.com/murals/default-avatar-profile-icon-vector-social-media-user-image-700-205124837.jpg' },
  { id: 12, name: 'Michael Johnson',
  designation:'farmer', avatar:'https://img.myloview.com/murals/default-avatar-profile-icon-vector-social-media-user-image-700-205124837.jpg' },
  { id: 13, name: 'John Doe',
  designation:'farmer', avatar:'https://img.myloview.com/murals/default-avatar-profile-icon-vector-social-media-user-image-700-205124837.jpg' },
  { id: 14, name: 'Jane Smith',
  designation:'farmer', avatar:'https://img.myloview.com/murals/default-avatar-profile-icon-vector-social-media-user-image-700-205124837.jpg' },
  { id: 15, name: 'Michael Johnson',
  designation:'farmer', avatar:'https://img.myloview.com/murals/default-avatar-profile-icon-vector-social-media-user-image-700-205124837.jpg' },
  // Add more employee data as needed
];

const People = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [listDecistion, setListDcsition] = useState(false);
  const [isLogin,setIsLogin] = useState(false);

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleListDecistion = () => {
    setListDcsition(false);
    setSelectedEmployee("");
  }
  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
    setListDcsition(true);
    
  };

  const handleLogout = () => {
    // TODO: Implement logout logic here
     console.log(setIsLogin)
  };

  const filteredEmployees = employeesData.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="employee-list">
      <div className="search-section">
       
        <input
          type="text"
          placeholder="Search employees"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        {isLogin ? (
          <div className='search-nav-options' >
          <span>
           Profile 
          </span>
          <span onClick={handleLogout} >
            LogOut
          </span>

        </div>

        ):(
          <div className='search-nav-options' >
          <span>
            <a href='/sign_in' >SignIn</a>
          </span>
          <span>
            
            <a href='/sign_up' >Signup</a>
          </span>

        </div> 
        )}
         
        
       
        
      </div>
      <div className='list-profile-container' >
      <div className={`list-section ${listDecistion === true ? 'closelist' : ''}`} >
        <div style={{borderRadius:'5px',backgroundColor:'white',boxShadow:'none'}} >
          <span>Name</span>
          <span>Disigantion</span>
        </div>
        {filteredEmployees.map((employee) => (
          <div
            key={employee.id}
           
            onClick={() => handleEmployeeClick(employee)}
          >
           <span className='img-name-container' >
            <img alt='person_image' src={employee.avatar} />
            {employee.name}
           </span> 
           <span>{employee.designation}</span>
          </div>
        ))}
      </div>
      <div className="profile-section">
        {selectedEmployee ? (
          <div>
            <p onClick={handleListDecistion} className='profile-back-button' >Back</p>
            <h3>Profile</h3>
            <img alt='person_image' className='profileImage' src={selectedEmployee.avatar} />
            <p>Name: {selectedEmployee.name}</p>
            <p>Phone: +91 9133726921</p>
            <p>Designation: student</p>
            <p>Gender: Male</p>
            <p>Mushidipalli, Devarapalli, Anakapalli, Andhrapeadhesh</p>
            <p>Mushidipalli, Devarapalli, Anakapalli, Andhrapeadhesh</p>
            
            {/* Add more employee details here */}
          </div>
        ) : ''}
      </div>
      </div>
      
    </div>
  );
};

export default People;
