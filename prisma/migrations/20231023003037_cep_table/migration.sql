-- CreateTable
CREATE TABLE "Cep" (
    "id" SERIAL NOT NULL,
    "cep" TEXT NOT NULL,
    "logradouro" TEXT,
    "complemento" TEXT,
    "bairro" TEXT,
    "localidade" TEXT,
    "uf" TEXT,
    "ibge" TEXT,
    "gia" TEXT,
    "ddd" TEXT,
    "siafi" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cep_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cep_cep_key" ON "Cep"("cep");
