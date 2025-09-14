import { useState } from "react";

// --- ÍCONES FINAIS ESCOLHIDOS POR VOCÊ ---
const CategoryIcons = {
  "Pipelines de Dados Confiáveis": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16" // viewBox ajustado para 16x16
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path fillRule="evenodd" d="M0 1.75A.75.75 0 0 1 .75 1h6a.75.75 0 0 1 0 1.5H6.5v2.25a.5.5 0 0 0 .5.5h2.25A5.75 5.75 0 0 1 15 11v2.5h.25a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5h.25v-2.25a.5.5 0 0 0-.5-.5H6.75A5.75 5.75 0 0 1 1 5V2.5H.75A.75.75 0 0 1 0 1.75M11 13.5h2.5V11a4.25 4.25 0 0 0-4.25-4.25h-.5v2.5H9a2 2 0 0 1 2 2zm-8.5-11H5v2.25a2 2 0 0 0 2 2h.25v2.5h-.5A4.25 4.25 0 0 1 2.5 5z" clipRule="evenodd"></path>
    </svg>
  ),
  "Arquiteturas de Dados Escaláveis": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" // viewBox mantido em 24x24
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M0 3.5A2.5 2.5 0 0 0 2.5 6h17A2.5 2.5 0 0 0 22 3.5v-1A2.5 2.5 0 0 0 19.5 0h-17A2.5 2.5 0 0 0 0 2.5ZM3.64 3a1.11 1.11 0 1 1 1.11 1.11A1.1 1.1 0 0 1 3.64 3M7.5 3a1.12 1.12 0 1 1 1.11 1.11A1.11 1.11 0 0 1 7.5 3m10 6.5a7.9 7.9 0 0 1 3.78.95A.49.49 0 0 0 22 10v-.5A2.5 2.5 0 0 0 19.5 7h-17A2.5 2.5 0 0 0 0 9.5v1A2.5 2.5 0 0 0 2.5 13h8.14a.5.5 0 0 0 .4-.21A8 8 0 0 1 17.5 9.5m-7.77.5a1.12 1.12 0 1 1-1.12-1.11A1.11 1.11 0 0 1 9.73 10m-3.87 0a1.11 1.11 0 1 1-1.11-1.11A1.1 1.1 0 0 1 5.86 10m3.7 4H2.5A2.5 2.5 0 0 0 0 16.5v1A2.5 2.5 0 0 0 2.5 20h6.74a.51.51 0 0 0 .48-.64a8 8 0 0 1 .3-4.69a.49.49 0 0 0-.46-.67m-5.92 3a1.11 1.11 0 1 1 1.11 1.11A1.1 1.1 0 0 1 3.64 17"></path><path d="M11 17.5a6.5 6.5 0 1 0 6.5-6.5a6.51 6.51 0 0 0-6.5 6.5m5.75 1a.25.25 0 0 0-.25-.25H15a.75.75 0 0 1 0-1.5h1.5a.25.25 0 0 0 .25-.25V15a.75.75 0 0 1 1.5 0v1.5a.25.25 0 0 0 .25.25H20a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25V20a.75.75 0 0 1-1.5 0Z"></path>
    </svg>
  ),
  "Dados Prontos para o Negócio": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48" // viewBox ajustado para 48x48
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
        <circle cx="24" cy="12" r="8" fill="currentColor"></circle>
        <path d="M42 44c0-9.941-8.059-18-18-18S6 34.059 6 44"></path>
        <path fill="currentColor" d="m24 44l4-5l-4-13l-4 13z"></path>
      </g>
    </svg>
  ),
};
// --- FIM DO BLOCO DE ÍCONES ---

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Pipelines de Dados Confiáveis": [
      "Desenvolvo pipelines ETL/ELT (Python, Spark) que reduzem o tempo de processamento em até 96%.",
      "Orquestro fluxos de dados batch e near real-time com Airflow, garantindo execução confiável.",
      "Implemento CI/CD (DataOps) para automatizar testes e garantir a entrega de dados de qualidade.",
      "Otimizo queries SQL legadas, diminuindo o tempo de execução e os custos em até 90%."
    ],
    "Arquiteturas de Dados Escaláveis": [
      "Construo infraestruturas de dados na AWS com Terraform (IaC) para alta escalabilidade.",
      "Projeto arquiteturas Lakehouse em Databricks (Delta Lake, Unity Catalog) para dados governados.",
      "Estruturo soluções serverless na AWS (Lambda, ECS) com foco em otimização de custo e performance.",
      "Containerizo aplicações Spark com Docker para simplificar o deploy e a escalabilidade dos jobs."
    ],
    "Dados Prontos para o Negócio": [
      "Utilizo dbt para modelar, testar e documentar dados, acelerando a geração de insights.",
      "Crio datasets confiáveis que servem como 'fonte da verdade' para BI, Analytics e Data Science.",
      "Garanto a governança e a qualidade dos dados com catálogos (Unity Catalog) e testes de ponta a ponta.",
      "Traduzo requisitos de negócio em soluções de dados que impulsionam a tomada de decisão."
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        O que eu entrego com dados?
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;