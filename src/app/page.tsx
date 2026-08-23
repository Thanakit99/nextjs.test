type Course = {
  id: number;
  code: string;
  title: string;
  credits: number;
  isOpen: boolean;
};

export default function HomePage() {
  const siteName: string = "Student Course Hub";
  const description: string = "เว็บไซต์รวบรวมข้อมูลรายวิชาและหลักสูตรสำหรับนักศึกษา";
  const courseCount: number = 5;
  const isOpen: boolean = true;
  const courses: Course[] = [
    {
      id: 1,
      code: "10301231",
      title: "Web Technology",
      credits: 3,
      isOpen: true,
    },
    {
      id: 2,
      code: "10301232",
      title: "Database Systems",
      credits: 3,
      isOpen: false,
    },
    {
      id: 3,
      code: "10301233",
      title: "Object-Oriented Programming",
      credits: 3,
      isOpen: true,
    },
    {
      id: 4,
      code: "10301234",
      title: "Data Structures and Algorithms",
      credits: 3,
      isOpen: true,
    },
    {
      id: 5,
      code: "10301235",
      title: "Computer Networks",
      credits: 3,
      isOpen: false,
    },
  ];

  return (
    <main>
      <h1>{siteName}</h1>
      <p>{description}</p>
      <p>จำนวนรายวิชา: {courseCount}</p>
      <p>สถานะระบบ: {isOpen ? "เปิดใช้งาน" : "ปิดใช้งาน"}</p>
      <section>
        <h2>กลุ่มผู้ใช้เป้าหมาย</h2>
        <p>เว็บไซต์นี้เหมาะสำหรับนักศึกษา อาจารย์ และผู้ที่ต้องการตรวจสอบข้อมูลรายวิชาและสถานะการเปิดลงทะเบียน</p>
      </section>

      <section className="courseGrid">
        {courses.map((course) => (
          <article key={course.id} className="courseCard">
            <h2>{course.title}</h2>
            <p>รหัสวิชา: {course.code}</p>
            <p>{course.credits} หน่วยกิต</p>
            <p>
              {course.isOpen ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
} 