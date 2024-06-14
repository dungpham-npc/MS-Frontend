// StaffManagement.js
import React, { useState } from 'react';
import { Container, Box, TextField, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import StaffDetailModal from '../components/StaffDetailModal';
import AddStaffModal from '../components/AddStaffModal';
import { useNavigate } from 'react-router-dom';
const initialStaffList = [
  {
    id: 1,
    name: 'Staff 1',
    role: 'Employee',
    addedOn: '30/2/2022',
    username: 'ANguyenVan',
    phoneNumber: '(717) 550-1675',
    email: 'eg@gmail.com',
  },
  {
    id: 3,
    name: 'Staff 1',
    role: 'Manager',
    addedOn: '12/5/2021',
    username: 'BTranThi',
    phoneNumber: '(720) 123-4567',
    email: 'tranthi@gmail.com',
  },
  {
    id: 3,
    name: 'Staff 3',
    role: 'Employee',
    addedOn: '22/8/2020',
    username: 'CPhamVan',
    phoneNumber: '(725) 987-6543',
    email: 'phamvan@gmail.com',
  },
  {
    id: 4,
    name: 'Staff 4',
    role: 'Supervisor',
    addedOn: '14/11/2019',
    username: 'DLeThi',
    phoneNumber: '(715) 321-9876',
    email: 'lethi@gmail.com',
  },
  {
    id: 5,
    name: 'Staff 5',
    role: 'Employee',
    addedOn: '19/7/2018',
    username: 'EHoangVan',
    phoneNumber: '(719) 654-3210',
    email: 'hoangvan@gmail.com',
  },
  {
    id: 6,
    name: 'Staff 6',
    role: 'Assistant Manager',
    addedOn: '2/3/2021',
    username: 'FVuThi',
    phoneNumber: '(723) 456-7890',
    email: 'vuthi@gmail.com',
  },
  {
    id: 7,
    name: 'Staff 7',
    role: 'Employee',
    addedOn: '25/12/2020',
    username: 'GNguyenThi',
    phoneNumber: '(716) 987-1234',
    email: 'nguyenthi@gmail.com',
  },
  {
    id: 8,
    name: 'Staff 8',
    role: 'HR Manager',
    addedOn: '18/4/2017',
    username: 'HDangVan',
    phoneNumber: '(712) 321-6547',
    email: 'dangvan@gmail.com',
  },
  {
    id: 9,
    name: 'Staff 9',
    role: 'Employee',
    addedOn: '8/2/2019',
    username: 'IBuiThi',
    phoneNumber: '(726) 234-5678',
    email: 'buithi@gmail.com',
  },
  {
    id: 10,
    name: 'Staff 10',
    role: 'Sales Manager',
    addedOn: '27/6/2018',
    username: 'JNgoVan',
    phoneNumber: '(714) 456-1230',
    email: 'ngovan@gmail.com',
  },
  {
    id: 11,
    name: 'Staff 11',
    role: 'Employee',
    addedOn: '1/1/2022',
    username: 'KNguyenThi',
    phoneNumber: '(717) 234-8901',
    email: 'nguyenthiK@gmail.com',
  },
  {
    id: 12,
    name: 'Staff 12',
    role: 'Employee',
    addedOn: '5/5/2022',
    username: 'LTranVan',
    phoneNumber: '(722) 876-5432',
    email: 'tranvan@gmail.com',
  },
  {
    id: 13,
    name: 'Staff 13',
    role: 'Employee',
    addedOn: '12/12/2020',
    username: 'MHoangThi',
    phoneNumber: '(729) 567-8901',
    email: 'hoangthi@gmail.com',
  },
  {
    id: 14,
    name: 'Staff 14',
    role: 'Employee',
    addedOn: '14/4/2021',
    username: 'NLeVan',
    phoneNumber: '(718) 345-6789',
    email: 'levan@gmail.com',
  },
  {
    id: 15,
    name: 'Staff 15',
    role: 'Employee',
    addedOn: '20/10/2019',
    username: 'OPhamThi',
    phoneNumber: '(713) 789-0123',
    email: 'phamthi@gmail.com',
  },
  {
    id: 16,
    name: 'Staff 16',
    role: 'Employee',
    addedOn: '30/1/2020',
    username: 'PNguyenVan',
    phoneNumber: '(721) 123-4567',
    email: 'nguyenvanP@gmail.com',
  },
  {
    id: 17,
    name: 'Staff 17',
    role: 'Employee',
    addedOn: '11/11/2021',
    username: 'QDoThi',
    phoneNumber: '(727) 987-6543',
    email: 'dothi@gmail.com',
  },
  {
    id: 18,
    name: 'Staff 18',
    role: 'Employee',
    addedOn: '29/9/2018',
    username: 'RNguyenVan',
    phoneNumber: '(719) 654-3210',
    email: 'nguyenvanR@gmail.com',
  },
  {
    id: 19,
    name: 'Staff 19',
    role: 'Employee',
    addedOn: '6/6/2020',
    username: 'STranThi',
    phoneNumber: '(714) 876-5432',
    email: 'tranthiS@gmail.com',
  },
  {
    id: 20,
    name: 'Staff 20',
    role: 'Employee',
    addedOn: '23/3/2019',
    username: 'TLeVan',
    phoneNumber: '(716) 234-5678',
    email: 'levanT@gmail.com',
  },
];


function StaffManagement() {
  const [staffList, setStaffList] = useState(initialStaffList);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [isAddModalOpen, setAddModalOpen] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const navigate= useNavigate();

  const handleAddStaff = (newStaff) => {
    const newStaffWithName = {
      ...newStaff,
      name: `${newStaff.firstName} ${newStaff.lastName}`,
      addedOn: new Date().toLocaleDateString(),
    };
    setStaffList([...staffList, newStaffWithName]);
  };

  const handleRowClick = (staff) => {
    setSelectedStaff(staff);
  };

  const handleCloseDetailModal = () => {
    setSelectedStaff(null);
  };

  const handleOpenAddModal = () => {
    navigate('/admin/newStaff')
  };

  const handleCloseAddModal = () => {
    setAddModalOpen(false);
  };

  const filteredStaffList = staffList.filter(staff =>
    staff.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h4">Staff</Typography>
        <Button onClick={handleOpenAddModal}>+ Add Staff</Button>
      </Box>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search staff"
        value={searchTerm}
        onChange={handleSearchChange}
        sx={{ mb: 2 }}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Staff ID</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Added On</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Email</TableCell>
              
     
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredStaffList.map((staff) => (
              <TableRow key={staff.id} onClick={() => handleRowClick(staff)}>
                <TableCell>{staff.name}</TableCell>
                <TableCell>{staff.id}</TableCell>
                <TableCell>{staff.role}</TableCell>
                <TableCell>{staff.addedOn}</TableCell>
                <TableCell>{staff.phoneNumber}</TableCell>
                <TableCell>{staff.email}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <StaffDetailModal open={!!selectedStaff} handleClose={handleCloseDetailModal} staff={selectedStaff} />
    </Container>
  );
}

export default StaffManagement;
