import React, { useState } from "react";
import { CreditCard } from "lucide-react";

const ContaDigitoExplicacao = () => {
  const [mostrarExplicacaoAgencia, setMostrarExplicacaoAgencia] = useState(false);
  const [destacarDigitoAgencia, setDestacarDigitoAgencia] = useState(false);
  const [mostrarExplicacaoConta, setMostrarExplicacaoConta] = useState(false);
  const [destacarDigitoConta, setDestacarDigitoConta] = useState(false);

  const numeroAgencia = "1234";
  const digitoVerificadorAgencia = "5";
  const numeroConta = "12345";
  const digitoVerificadorConta = "6";

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white max-w-lg mx-auto rounded-xl p-8 shadow-lg">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <CreditCard className="h-6 w-6" />
              <span className="text-lg font-bold">Banco Exemplo</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-1">
              <p className="text-xs text-gray-200 font-medium">Ag�ncia</p>
              <p className="font-mono text-lg tracking-wider">{numeroAgencia}-{digitoVerificadorAgencia}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-gray-200 font-medium">Conta</p>
              <p className="font-mono text-lg tracking-wider">{numeroConta}-{digitoVerificadorConta}</p>
            </div>
          </div>

          <div className="pt-2">
            <p className="text-xs text-gray-200 font-medium">Titular</p>
            <p className="font-medium tracking-wider text-lg">NOME DO CLIENTE</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center">
            Ag�ncia Banc�ria e seu D�gito Verificador
          </h2>
          <p className="text-center text-gray-600">
            Clique nos elementos para aprender mais
          </p>
        </div>
        <div className="p-6">
          <div className="flex justify-center items-center space-x-1 text-3xl my-8">
            <button 
              className={`px-4 py-2 rounded transition-all duration-300 ${
                !destacarDigitoAgencia ? "bg-purple-100 hover:bg-purple-200" : "bg-gray-100"
              }`}
              onClick={() => {
                setMostrarExplicacaoAgencia(true);
                setDestacarDigitoAgencia(false);
              }}
            >
              {numeroAgencia}
            </button>
            <span className="mx-1">-</span>
            <button 
              className={`px-4 py-2 rounded transition-all duration-300 ${
                destacarDigitoAgencia ? "bg-pink-100 hover:bg-pink-200" : "bg-gray-100"
              }`}
              onClick={() => {
                setMostrarExplicacaoAgencia(true);
                setDestacarDigitoAgencia(true);
              }}
            >
              {digitoVerificadorAgencia}
            </button>
          </div>

          {mostrarExplicacaoAgencia && (
            <div className="mt-4 p-4 border rounded-md bg-gray-50">
              {destacarDigitoAgencia ? (
                <div className="space-y-2">
                  <p className="font-semibold text-pink-700">D�gito Verificador da Ag�ncia:</p>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>N�mero de verifica��o espec�fico da ag�ncia</li>
                    <li>Ajuda a validar se o n�mero da ag�ncia foi digitado corretamente</li>
                    <li>Nem todos os bancos utilizam DV para ag�ncia</li>
                    <li>Importante para evitar erros em transa��es interbanc�rias</li>
                  </ul>
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="font-semibold text-purple-700">N�mero da Ag�ncia:</p>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Identifica a unidade banc�ria espec�fica</li>
                    <li>Geralmente possui 4 d�gitos</li>
                    <li>Representa o ponto f�sico ou virtual do banco</li>
                    <li>� �nico dentro do mesmo banco</li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center">
            Conta Banc�ria e seu D�gito Verificador
          </h2>
          <p className="text-center text-gray-600">
            Clique nos elementos para aprender mais
          </p>
        </div>
        <div className="p-6">
          <div className="flex justify-center items-center space-x-1 text-3xl my-8">
            <button 
              className={`px-4 py-2 rounded transition-all duration-300 ${
                !destacarDigitoConta ? "bg-blue-100 hover:bg-blue-200" : "bg-gray-100"
              }`}
              onClick={() => {
                setMostrarExplicacaoConta(true);
                setDestacarDigitoConta(false);
              }}
            >
              {numeroConta}
            </button>
            <span className="mx-1">-</span>
            <button 
              className={`px-4 py-2 rounded transition-all duration-300 ${
                destacarDigitoConta ? "bg-green-100 hover:bg-green-200" : "bg-gray-100"
              }`}
              onClick={() => {
                setMostrarExplicacaoConta(true);
                setDestacarDigitoConta(true);
              }}
            >
              {digitoVerificadorConta}
            </button>
          </div>

          {mostrarExplicacaoConta && (
            <div className="mt-4 p-4 border rounded-md bg-gray-50">
              {destacarDigitoConta ? (
                <div className="space-y-2">
                  <p className="font-semibold text-green-700">D�gito Verificador da Conta:</p>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>� o n�mero final que serve como mecanismo de seguran�a</li>
                    <li>Calculado matematicamente a partir dos n�meros da conta</li>
                    <li>Ajuda a identificar erros de digita��o</li>
                    <li>Impede transfer�ncias para contas inv�lidas</li>
                  </ul>
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="font-semibold text-blue-700">N�mero da Conta:</p>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>� o identificador �nico da sua conta no banco</li>
                    <li>Geralmente possui entre 5 a 12 d�gitos</li>
                    <li>Usado em conjunto com a ag�ncia para localizar sua conta</li>
                    <li>N�o inclui o d�gito verificador</li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="text-center text-sm text-gray-500">
        <p>Exemplo completo: Ag�ncia 1234-5 / Conta 12345-6</p>
      </div>
    </div>
  );
};

export default ContaDigitoExplicacao;
