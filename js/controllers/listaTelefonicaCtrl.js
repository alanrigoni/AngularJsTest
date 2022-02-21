angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope,) {
    //É como se declara variáveis para ser usadas depois com {{}}
    $scope.app = "Lista Telefonica";
    $scope.contatos = [
        {nome: "Leandro", telefone: "9999-8888", data : new Date(), operadora: {nome: "Vivo", codigo: "15", categoria: "Celular"},cor : "yellow"},
        {nome: "Alan", telefone: "9999-8877", data : new Date(), operadora: {nome: "Tim", codigo: "14", categoria: "Celular"}, cor : "red"},
        {nome: "Teste", telefone: "9999-8866", data : new Date(),operadora: {nome: "Claro", codigo: "16", categoria: "Celular"}, cor : "green"}
    ];
    $scope.operadoras = [
        {nome: "Vivo", codigo: 15, categoria: "Celular", preco: 2},
        {nome: "Tim", codigo:14, categoria: "Celular", preco: 1},
        {nome: "Claro", codigo: 16, categoria: "Celular", preco: 3},
        {nome: "GVT", codigo: 13, categoria: "Fixo", preco: 1},
        {nome: "Embratel", codigo: 12, categoria: "Fixo", preco: 2}

    ];
    //3 - chegou na função
    $scope.adicionarContato = function (contato) {
        //4 - Entrou no array
        $scope.contatos.push(angular.copy(contato));
        //apaga e começa um novo campo para contato
        delete $scope.contato;
        //Depois de adicionado ele volta ao estado de indocado
        $scope.contatoForm.$setPristine();
    };
    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });
    };

    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato){
            return contato.selecionado;
        });
    };

    $scope.ordenarPor = function(campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };

    $scope.classe = "selecionado";
});