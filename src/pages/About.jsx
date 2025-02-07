import {useState} from "react";
import SimpleModal from "./TitlePage/SimpleModal";

function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTwoOpen, setModaTwolOpen] = useState(false);

  return (
    <div className="text-center text-5xl mt-32">
      <h1>СО ВАЛ МЕГИ?</h1>
      <SimpleModal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h2>Тигр дукх хьо</h2>
      </SimpleModal>
      <SimpleModal isOpen={modalTwoOpen} onClose={() => setModaTwolOpen(false)}>
        <h2>хал дар хьун мег ал?</h2>
      </SimpleModal>
      <div className="text-center text-5xl mt-28">
        <button
          onClick={() => setModalOpen(true)}
          className="mr-5 border-2 border-indigo-500 py-5 px-10 bg-indigo-600 text-white hover:bg-transparent hover:text-black"
        >
          МЕГ
        </button>

        <button
          onClick={() => setModaTwolOpen(true)}
          className="ml-5 border-2 border-indigo-500 py-5 px-10 bg-indigo-600 text-white hover:bg-transparent hover:text-black"
        >
          ЦА МЕГ
        </button>
      </div>
    </div>
  );
}

export default AboutPage;
