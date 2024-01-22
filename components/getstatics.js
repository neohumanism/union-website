import path from 'path';
import fs from 'fs/promises';

export async function getDirectory(directory, fileExtension) {
  const fullPath = path.join(process.cwd(), directory);
  const fileNames = await fs.readdir(fullPath);

  const paths = fileNames.map((fileName) => ({
    params: { slug: fileName.replace(new RegExp(`\\.${fileExtension}$`), '') },
  }));

  return { paths, fallback: false };
};

export async function getFileProps(directory, slug, fileExtension) {
  const fullPath = path.join(process.cwd(), directory, `${slug}.${fileExtension}`);
  const data = await fs.readFile(fullPath, 'utf8');

  return {
    props: {
      data,
    },
  };
};

export async function getFiles(directory, paths, fileExtension) {
    const results = await Promise.all(
      paths.map(async (path) => {
        const content = await getFileProps(directory, path.params.slug, fileExtension);
        
        return {
          path: path.params.slug,
          content: content.props.data
        };
      })
    );

    return {
      props: {
        data: results,
      },
    };
};