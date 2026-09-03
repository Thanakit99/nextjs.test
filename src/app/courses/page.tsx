type Course = {
    id: number;
    code: string;
    title: string;
    credits: number;
    isOpen: boolean;
};

const COURSES_DATA: Course[] = [
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
        title: "Network",
        credits: 3,
        isOpen: true,
    },
    {
        id: 3,
        code: "10301233",
        title: "Database Systems",
        credits: 3,
        isOpen: false,
    },
    {
        id: 4,
        code: "10301234",
        title: "Structure Relational Database",
        credits: 3,
        isOpen: true,
    },
];

export default function CoursesPage() {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-200 p-6 md:p-10">
            <header className="mb-10">
                <h1 className="text-4xl font-bold text-gray-50 tracking-tight mb-3">รายวิชาทั้งหมด</h1>
                <p className="text-xl text-gray-300">ตรวจสอบรายชื่อวิชาและสถานะการเปิดลงทะเบียน</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {COURSES_DATA.map((course) => (
                    <article
                        key={course.id}
                        className="bg-gray-800 border border-gray-700 rounded-2xl p-7 shadow-lg hover:border-blue-700 hover:shadow-blue-900/30 transition-all duration-300 flex flex-col justify-between space-y-6"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <h2 className="text-xl font-bold text-gray-50 leading-tight flex-1">
                                {course.title}
                            </h2>
                            <span className="text-xs font-medium px-3 py-1.5 bg-blue-900 text-blue-300 rounded-full whitespace-nowrap">
                                {course.code}
                            </span>
                        </div>

                        <div className="pt-6 border-t border-gray-700 flex items-center justify-between text-sm">
                            <span className="text-gray-400">{course.credits} หน่วยกิต</span>
                            <span
                                className={`px-4 py-1.5 rounded-full text-xs font-semibold ${
                                    course.isOpen
                                        ? "bg-green-900 text-green-300"
                                        : "bg-red-900 text-red-300"
                                }`}
                            >
                                {course.isOpen ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}
                            </span>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}