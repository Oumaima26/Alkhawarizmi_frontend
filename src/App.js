import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//component not connected
import Dashboard from './component_not_connected/home/Home';
import SignIn from './component_not_connected/signin/SignIn';
import SignUp from './component_not_connected/SignUp';
import SignInPupil from './component_not_connected/signin/SignInPupil';
import ForgetPassword from './component_not_connected/forgotpwd/ForgotPassword';
import ForgetPasswordPupil from './component_not_connected/forgotpwd/ForgotPasswordPupil';
import SignInTeacher from './component_not_connected/signin/SignInTeacher';

//admin
import Home from './component_connected/admin/Dashboard';
import ListTeachers from './component_connected/admin/table/ListTeachers';
import Profile from './component_connected/admin/Profile';
import ListStudents from './component_connected/admin/table/ListStudents';
import ListPupil from './component_connected/admin/table/ListPupil';
import ListClasse from './component_connected/admin/table/ListClasse';
import ListClassePupil from './component_connected/admin/timetable/ListClasse';
import UpdateProfile from './component_connected/admin/update/UpdateProfile';
import UpdatePupil from './component_connected/admin/update/UpdatePupil';
import UpdateTeacher from './component_connected/admin/update/UpdateTeacher';
import Show from './component_connected/admin/show/Show';
import ShowTeacher from './component_connected/admin/show/ShowTeacher';
import AddPupil from './component_connected/admin/add/AddPupil';
import AddTeacher from './component_connected/admin/add/AddTeacher';
import SMSMessenger from './component_connected/admin/SMSMessenger';
import Timetable from './component_connected/admin/timetable/Timetable';
import TimetableTeacher from './component_connected/admin/timetable/TimetableTeacher';
import AddTimetable from './component_connected/admin/add/AddTimetable';
import AddTimetablePupil from './component_connected/admin/add/AddTimetablePupil';
import AddSubject from './component_connected/admin/add/AddSubject';
import ListSubject from './component_connected/admin/table/ListSubject';
import UpdateSubject from './component_connected/admin/update/UpdateSubject';

//teacher
import HomeTeacher from './component_connected/teacher/Dashboard';
import ListStudentsT from './component_connected/teacher/table/ListStudents';
import ProfileTeacher from './component_connected/teacher/Profile';
import UpdateProfileTeacher from './component_connected/teacher/UpdateProfile';
import TimetableT from './component_connected/teacher/timetable/Timetable';
import ListNotes from './component_connected/teacher/table/ListNotes';
import AddNote from './component_connected/teacher/add/AddNote';
import ListClasseTeacher from './component_connected/teacher/add/ListClasse';
import ListNoteSubjectLevel from './component_connected/teacher/table/ListNoteSubjectLevel';
import ListLevel from './component_connected/teacher/table/ListLevel';
//pupil
import HomeParent from './component_connected/eleve/Dashboard';
import ProfileParent from './component_connected/eleve/Profile';
import UpdateProfileParent from './component_connected/eleve/UpdateProfile';
import TimetableP from './component_connected/eleve/timetable/Timetable';
import ListNote from './component_connected/eleve/ListNote';

export default function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={< Dashboard />} />
        <Route path="/signin" element={< SignIn />} />
        <Route path="/parent/signin" element={< SignInPupil />} />
        <Route path="/teacher/signin" element={< SignInTeacher />} />
        <Route path="/signup" element={< SignUp />} />
        <Route path="/forgotpassword" element={< ForgetPassword />} />
        <Route path="/parent/forgotpassword" element={< ForgetPasswordPupil />} />
        {/*admin */}
        <Route path="/home" element={< Home />} />
        <Route path="/listteacher" element={< ListTeachers />} />
        <Route path="/profile" element={< Profile />} />
        <Route path="/updateprofile" element={< UpdateProfile />} />
        <Route path="/liststudents/:level" element={< ListStudents />} />
        <Route path="/listpupil" element={< ListPupil />} />
        <Route path="/updatepupil/:level" element={< UpdatePupil />} />
        <Route path="/updateteacher/:id" element={< UpdateTeacher />} />
        <Route path="/listclasse" element={< ListClasse />} />
        <Route path="/addpupil" element={< AddPupil />} />
        <Route path="/addteacher" element={< AddTeacher />} />
        <Route path="/addtimetable/:id" element={< AddTimetable />} />
        <Route path="/addtimetablepupil" element={< AddTimetablePupil />} />
        <Route path="/sms" element={< SMSMessenger />} />
        <Route path="/timetablepupil" element={< Timetable />} />
        <Route path="/listclassepupil" element={< ListClassePupil />} />
        <Route path="/timetableteacher" element={< TimetableTeacher />} />
        <Route path="/addsubject" element={< AddSubject />} />
        <Route path="/listsubject" element={< ListSubject />} />
        <Route path="/updatesubject/:id" element={< UpdateSubject />} />
        <Route path="/show/:id" element={< Show />} />
        <Route path="/showteacher/:id" element={< ShowTeacher />} />

{/*teacher */}
        <Route path="/teacher/home" element={< HomeTeacher/>} />
        <Route path="/teacher/updateprofile/:id" element={< UpdateProfileTeacher />} />
        <Route path="/teacher/profile" element={< ProfileTeacher/>} />
        <Route path="/teacher/liststudents/:level" element={< ListStudentsT/>} />
        <Route path="/teacher/listlevel" element={< ListLevel/>} />
        <Route path="/teacher/timetable" element={< TimetableT/>} />
        <Route path="/teacher/listnote" element={< ListNotes />} />
        <Route path="/teacher/listnotesubjectlevel" element={< ListNoteSubjectLevel />} />
        <Route path="/teacher/addnote/:level" element={< AddNote />} />
        <Route path="/teacher/listclasse" element={< ListClasseTeacher />} />
{/*pupil */}
        <Route path="/parent/home" element={< HomeParent />} />
        <Route path="/parent/profile" element={< ProfileParent />} />
        <Route path="/parent/updateprofile" element={< UpdateProfileParent />} />
        <Route path="/parent/timetable" element={< TimetableP />} />
        <Route path="/parent/listnote" element={< ListNote />} />

      </Routes>
    </Router>
  );
}
