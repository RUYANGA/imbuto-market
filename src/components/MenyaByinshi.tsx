import React from "react";
import Header from "@/components/Header";

const MenyaByinshi = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-9 mt-7">Menya Byinshi kuri Agri Fresh Harvest Rwanda Ltd</h1>
        <section className="space-y-6 text-lg text-foreground">
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-6">Abo Turibo</h2>
            <p>
              Agri Fresh Harvest Rwanda Ltd ni kompanyi nyarwanda yihaye intego yo kuvugurura uburyo imboga n’imbuto zigurishwa, zikusanywa kandi zigezwa ku isoko. Dukorera mu buryo buhuza abahinzi n’amasoko akomeye, tukabafasha kubona umusaruro ugezweho, ufite ubuziranenge kandi uboneka ku gihe.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-2">Icyo Dukora</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Dukora ubushakashatsi ku masoko (market demand).</li>
              <li>Dukorana n’abahinzi bo mu byiciro bitandukanye kugira ngo tubabonere isoko.</li>
              <li>Dukusanya umusaruro uhuye n’ibyo isoko rikeneye.</li>
              <li>Dutondeka, dutandukanya tukabipakira mu buryo bunogeye isoko.</li>
              <li>Tuzigeza ku masoko, supermarkets, hoteli, resitora n’ibindi bigo bikenera imboga n’imbuto mu buryo buhamye.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-2">Impamvu Dutandukanye</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Turabanza kumenya ibyo isoko rikeneye mbere yo gushaka umusaruro.</li>
              <li>Dufasha abahinzi kubona isoko ridahindagurika kandi rihoraho.</li>
              <li>Twita ku bwiza bw’umusaruro (quality control) mbere yo kuwushyikiriza abaguzi.</li>
              <li>Dutanga serivisi za same-day delivery mu gihe gikenewemo.</li>
              <li>Dukorana mu mucyo, twubaka icyizere hagati y’abahinzi n’abaguzi.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-2">Intego yacu (Vision)</h2>
            <p>Kuba urubuga rukomeye mu Rwanda no mu Karere mu guhuza abahinzi n’isoko, tugatanga imboga n’imbuto nziza, zoroshye kubona kandi zishingiye ku bucuruzi buhamye.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-2">Icyo Twiyemeje (Mission)</h2>
            <p>Guteza imbere abahinzi tubahuriza ku isoko rikwiriye umusaruro wabo. Gutanga imbuto n’imboga zifite ubuziranenge ku biciro byiza kandi bihamye. Gukoresha ikoranabuhanga mu kurushaho kunoza imikorere no kugabanya umusaruro wangirika. Gukora ubucuruzi burengera ibidukikije.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-2">Ibyo Dutanga (Services)</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Guhuza abaguzi n’abahinzi (Market linkage).</li>
              <li>Sorting, grading & packaging y’umusaruro.</li>
              <li>Delivery ku masoko makuru.</li>
              <li>Gukusanya amakuru ku isoko (market insights).</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MenyaByinshi;
