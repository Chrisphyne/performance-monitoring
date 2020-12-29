package io.github.jhipster.sample.service.mapper;

import io.github.jhipster.sample.domain.BankAccount;
import io.github.jhipster.sample.domain.Label;
import io.github.jhipster.sample.domain.Operation;
import io.github.jhipster.sample.service.dto.LabelDTO;
import io.github.jhipster.sample.service.dto.OperationDTO;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import javax.annotation.Generated;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2020-12-28T12:40:57+0300",
    comments = "version: 1.3.1.Final, compiler: Eclipse JDT (IDE) 1.3.1200.v20200916-0645, environment: Java 11.0.9.1 (AdoptOpenJDK)"
)
@Component
public class OperationMapperImpl implements OperationMapper {

    @Autowired
    private BankAccountMapper bankAccountMapper;
    @Autowired
    private LabelMapper labelMapper;

    @Override
    public List<Operation> toEntity(List<OperationDTO> dtoList) {
        if ( dtoList == null ) {
            return null;
        }

        List<Operation> list = new ArrayList<Operation>( dtoList.size() );
        for ( OperationDTO operationDTO : dtoList ) {
            list.add( toEntity( operationDTO ) );
        }

        return list;
    }

    @Override
    public List<OperationDTO> toDto(List<Operation> entityList) {
        if ( entityList == null ) {
            return null;
        }

        List<OperationDTO> list = new ArrayList<OperationDTO>( entityList.size() );
        for ( Operation operation : entityList ) {
            list.add( toDto( operation ) );
        }

        return list;
    }

    @Override
    public OperationDTO toDto(Operation operation) {
        if ( operation == null ) {
            return null;
        }

        OperationDTO operationDTO = new OperationDTO();

        operationDTO.setBankAccountName( operationBankAccountName( operation ) );
        operationDTO.setBankAccountId( operationBankAccountId( operation ) );
        operationDTO.setId( operation.getId() );
        operationDTO.setDate( operation.getDate() );
        operationDTO.setDescription( operation.getDescription() );
        operationDTO.setAmount( operation.getAmount() );
        operationDTO.setLabels( labelSetToLabelDTOSet( operation.getLabels() ) );

        return operationDTO;
    }

    @Override
    public Operation toEntity(OperationDTO operationDTO) {
        if ( operationDTO == null ) {
            return null;
        }

        Operation operation = new Operation();

        operation.setBankAccount( bankAccountMapper.fromId( operationDTO.getBankAccountId() ) );
        operation.setId( operationDTO.getId() );
        operation.setDate( operationDTO.getDate() );
        operation.setDescription( operationDTO.getDescription() );
        operation.setAmount( operationDTO.getAmount() );
        operation.setLabels( labelDTOSetToLabelSet( operationDTO.getLabels() ) );

        return operation;
    }

    private String operationBankAccountName(Operation operation) {
        if ( operation == null ) {
            return null;
        }
        BankAccount bankAccount = operation.getBankAccount();
        if ( bankAccount == null ) {
            return null;
        }
        String name = bankAccount.getName();
        if ( name == null ) {
            return null;
        }
        return name;
    }

    private Long operationBankAccountId(Operation operation) {
        if ( operation == null ) {
            return null;
        }
        BankAccount bankAccount = operation.getBankAccount();
        if ( bankAccount == null ) {
            return null;
        }
        Long id = bankAccount.getId();
        if ( id == null ) {
            return null;
        }
        return id;
    }

    protected Set<LabelDTO> labelSetToLabelDTOSet(Set<Label> set) {
        if ( set == null ) {
            return null;
        }

        Set<LabelDTO> set1 = new HashSet<LabelDTO>( Math.max( (int) ( set.size() / .75f ) + 1, 16 ) );
        for ( Label label : set ) {
            set1.add( labelMapper.toDto( label ) );
        }

        return set1;
    }

    protected Set<Label> labelDTOSetToLabelSet(Set<LabelDTO> set) {
        if ( set == null ) {
            return null;
        }

        Set<Label> set1 = new HashSet<Label>( Math.max( (int) ( set.size() / .75f ) + 1, 16 ) );
        for ( LabelDTO labelDTO : set ) {
            set1.add( labelMapper.toEntity( labelDTO ) );
        }

        return set1;
    }
}
