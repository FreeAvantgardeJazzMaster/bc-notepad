import { nodes as basicNodes, marks } from 'ngx-editor';
import { Schema, Node as ProsemirrorNode, NodeSpec, DOMOutputSpec } from 'prosemirror-model';

const nodes = {
  ...basicNodes
};

const schema = new Schema({
  nodes,
  marks
});

export default schema;
