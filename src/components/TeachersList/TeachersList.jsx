import Teacher from '../Teacher/Teacher.jsx';
import css from './TeachersList.module.css';

export default function TeachersList({ teachers }) {
  return (
    <ul className={css.teachersList}>
      {teachers.map((teacher, index) => (
        <li key={index} className={css.teachersListItem}>
          <Teacher teacher={teacher} />
        </li>
      ))}
    </ul>
  );
}
