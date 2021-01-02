package io.github.jhipster.sample.service.mapper;

import io.github.jhipster.sample.domain.Label;
import io.github.jhipster.sample.service.dto.LabelDTO;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-01-02T10:33:01+0300",
    comments = "version: 1.3.1.Final, compiler: Eclipse JDT (IDE) 1.3.1200.v20200916-0645, environment: Java 11.0.9.1 (AdoptOpenJDK)"
)
@Component
public class LabelMapperImpl implements LabelMapper {

    @Override
    public LabelDTO toDto(Label entity) {
        if ( entity == null ) {
            return null;
        }

        LabelDTO labelDTO = new LabelDTO();

        labelDTO.setId( entity.getId() );
        labelDTO.setLabel( entity.getLabel() );

        return labelDTO;
    }

    @Override
    public List<Label> toEntity(List<LabelDTO> dtoList) {
        if ( dtoList == null ) {
            return null;
        }

        List<Label> list = new ArrayList<Label>( dtoList.size() );
        for ( LabelDTO labelDTO : dtoList ) {
            list.add( toEntity( labelDTO ) );
        }

        return list;
    }

    @Override
    public List<LabelDTO> toDto(List<Label> entityList) {
        if ( entityList == null ) {
            return null;
        }

        List<LabelDTO> list = new ArrayList<LabelDTO>( entityList.size() );
        for ( Label label : entityList ) {
            list.add( toDto( label ) );
        }

        return list;
    }

    @Override
    public Label toEntity(LabelDTO labelDTO) {
        if ( labelDTO == null ) {
            return null;
        }

        Label label = new Label();

        label.setId( labelDTO.getId() );
        label.setLabel( labelDTO.getLabel() );

        return label;
    }
}
