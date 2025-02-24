import React from 'react'
import StudentCard from "./StudentCard";


const StudManage = () => {
  return (
    <div className='lg:h-[120vh] p-10 backstudmanage pb-10'>
      <div className='flex justify-center mb-20'>
        <div className="faculty-header-dot h-6 w-3 mr-3 mt-[15px] bg-gradient-to-t from-blue-700 to-blue-400 rounded-sm"></div>
        <div className='text-5xl font-bold text-center text-slate-100/80'>Student Management</div>
      </div>
      <div className='flex justify-center '>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-32">
          <StudentCard 
            image={require("./../public/Students/akshit.jpg")}
            name="AKSHIT SUDHEER"
            position="Chairman"
            instagram = "https://www.instagram.com/akshit_1602"
            linkedin = "https://www.linkedin.com/in/akshit-sk/"
            github = "https://github.com/4k5h1t"
          />
          <StudentCard 
            image={require("./../public/Students/gourinath.jpg")}
            name="GOURINATH"
            position="Vice Chairman"
            instagram = "https://www.instagram.com/gnhd.11/"
            linkedin = "https://www.linkedin.com/in/gourinath-a9a53085/"
            github = "https://github.com/GNHD"
          />
          <StudentCard 
            image={require("./../public/Students/aby.jpg")}
            name="ABY STALIN"
            position="Creative Head"
            instagram = "https://www.instagram.com/alby.on/"
            linkedin = "https://www.linkedin.com/in/aby-stalin/"
            github = "https://github.com/Alby0n/"
          />
          <StudentCard 
            image={require("./../public/Students/srilakshmi.jpg")}
            name="SRILAKSHMI S R"
            position="Treasurer"
            instagram = "https://www.instagram.com/_srilakshmi.s.r_/"
            linkedin = "https://www.linkedin.com/in/srilakshmi-s-r-27a1741b8/"
            github = "https://github.com/srilakshmi1912/"
          />
          <StudentCard 
            image={require("./../public/Students/neeraja.jpg")}
            name="R NEERAJA ANAND"
            position="AI Lead"
            instagram = "https://www.instagram.com/neeraja.exe/"
            linkedin = "https://www.linkedin.com/in/rneerajaanand/"
            github = "https://github.com/TheNeerajaAnand/"
          />
          <StudentCard 
            image={require("./../public/Students/akhil.jpg")}
            name="AKHIL S KUMAR"
            position="Web Lead"
            instagram = "https://www.instagram.com/_.akhil.sk._/"
            linkedin = "https://www.linkedin.com/in/imakhilskumar/"
            github = "https://github.com/akhil-s-kumar"
          />
          <StudentCard 
            image={require("./../public/Students/vipin.jpg")}
            name="VIPIN VENU"
            position="CyberSec Lead"
            instagram = "https://www.instagram.com/__white_devil__17/"
            linkedin = "https://www.linkedin.com/in/vipin-venu-5245a7211/"
            github = "https://github.com/whitedevil1710"
          />
          <StudentCard
            image={require("./../public/Students/stud5.png")}
            name="N RIZWAN"
            position="Glitch Lead"
            instagram = "https://www.instagram.com/rizwan.nizarudin_/"
            linkedin = "https://www.linkedin.com/in/n-rizwan/"
            github = "https://github.com/stuntstorm"
          />
          <StudentCard
            image={require("./../public/Students/sudhin.jpg")}
            name="SUDHIN S"
            position="CP Lead"
            instagram = "https://www.instagram.com/sudhin_dev/"
            linkedin = "https://www.linkedin.com/in/sudi050/"
            github = "https://github.com/sudhin_s"
          />
        </div>
      </div>
    </div>
  )
}

export default StudManage