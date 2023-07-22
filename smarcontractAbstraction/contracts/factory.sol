// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

// Importez le contrat de l'enfant
import "./Melon.sol";

contract MelonFactory {
    // Événement pour notifier la création d'un nouveau contrat enfant
    event MelonContractCreated(address indexed MelonContractAddress, address indexed creator);

    // Fonction de la factory pour créer de nouveaux contrats enfants
    function createChildContract(bytes16 _appId, bytes16 _groupId, address _owner) external {
        Melon MelonContract = new Melon(_appId, _groupId, _owner);

        // Émettre l'événement pour notifier la création du contrat enfant
        emit MelonContractCreated(address(MelonContract), msg.sender);
    }
}
