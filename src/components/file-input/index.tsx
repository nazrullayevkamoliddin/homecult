import { Center, FileInput as FileField, FileInputProps, Group } from '@mantine/core';
import { FileIcon, FilePlusIcon, FileTextIcon, ImageIcon, UploadIcon } from '@modulz/radix-icons';
import InfoInput from '../input-info';
import { useStyles } from './file-input.styles';

interface InputProps extends FileInputProps {
  infoText?: string;
  ismultiple?: boolean;
  infoTitle?: string;
}
function Value({ file }: { file: File }) {
  console.log(file.type);
  return (
    <Center
      inline
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[1],
        fontSize: theme.fontSizes.xs,
        padding: '3px 7px',
        borderRadius: theme.radius.sm,
      })}
    >
      {file.type.includes('image') ? (
        <ImageIcon height={18} width={18} style={{ marginRight: 5 }} />
      ) : (
        <FileIcon height={18} width={18} style={{ marginRight: 5 }} />
      )}
      <span
        style={{
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          maxWidth: 200,
          display: 'inline-block',
        }}
      >
        {file.name}
      </span>
    </Center>
  );
}

const ValueComponent: FileInputProps['valueComponent'] = ({ value }) => {
  if (Array.isArray(value)) {
    return (
      <Group spacing="sm" py="xs">
        {value.map((file, index) => (
          <Value file={file} key={index} />
        ))}
      </Group>
    );
  }

  return value && <Value file={value} />;
};
const FileInput = ({ infoText, infoTitle, ismultiple, ...props }: InputProps) => {
  const { classes } = useStyles();

  return infoText ? (
    <InfoInput infoText={infoText ?? props.label} infoTitle={infoTitle}>
      <FileField
        icon={<UploadIcon height={18} width={18} />}
        valueComponent={ValueComponent}
        classNames={{
          root: classes.root,
          input: classes.input,
          label: classes.truncateLabel,
        }}
        {...props}
        multiple={ismultiple}
      />
    </InfoInput>
  ) : (
    <FileField
      valueComponent={ValueComponent}
      required
      classNames={{
        root: classes.root,
        input: classes.input,
        label: classes.label,
      }}
      {...props}
      multiple={ismultiple}
    />
  );
};

export default FileInput;
