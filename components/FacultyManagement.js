import FacultyCards from "./FacultyCards";

export default function FacultyManagement() {
    return (
        <>
            <div className="faculty-header flex justify-center items-center mt-10">
                <div className="faculty-header-dot h-6 w-3 mr-3 bg-gradient-to-t from-blue-700 to-blue-400 rounded-sm"></div>
                <h1 className="text-5xl text-white">Faculty Management</h1>
            </div>
            <div className="faculty-body mt-16 w-[100%]">
                <div className="faculty-row-1 flex justify-center items-center">
                    <FacultyCards
                        image={require("./../public/images/faculty-1.png")}
                        name="Mr.P.K Binu"
                        position="Faculty Sponsor"
                        mg="mr-32"
                    />
                    <FacultyCards
                        image={require("./../public/images/faculty-2.png")}
                        name="Dr. Jyothisha J Nair"
                        position="Executive Committee Member"
                        mg="mr-32"
                    />
                    <FacultyCards
                        image={require("./../public/images/faculty-3.png")}
                        name="Ms. Greeshma Sarath"
                        position="Chairperson"
                        mg="mr-0"
                    />
                </div>
                <div className="faculty-row-12 flex mt-20 justify-center items-center">
                    <FacultyCards
                        image={require("./../public/images/faculty-4.png")}
                        name="Mr. Sarath S"
                        position="Executive Committee Member"
                        mg="mr-32"
                    />
                    <FacultyCards
                        image={require("./../public/images/faculty-5.png")}
                        name="Mr. Krishna S"
                        position="Executive Committee Member"
                        mg="mr-0"
                    />
                </div>
            </div>
        </>
    );
}
