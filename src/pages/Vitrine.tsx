import Header from "@/components/Header";

const Vitrine = () => {
  return (
    <div className="h-screen w-full overflow-hidden fixed inset-0">
      <Header />
      <main className="w-full overflow-hidden" style={{ height: "calc(100vh - 80px)", marginTop: "80px" }}>
        <iframe
          src="https://fensterseifer.egestor.com.br/vitrine/"
          className="w-full h-full border-none"
          title="Demonstração de Vitrine"
        />
      </main>
    </div>
  );
};

export default Vitrine;
