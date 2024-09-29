**GPT Language Model Documentation**

This documentation provides a detailed explanation of the GPT language model implemented in PyTorch. It covers the architecture, components, and functions of the model, along with examples of how to use it.

**Summary**

The GPT language model is a transformer-based model designed to generate text based on a given prompt. It consists of an embedding layer, a series of transformer blocks, and a final layer norm and linear layer to output the generated text. The model is trained using a cross-entropy loss function and optimized using the AdamW optimizer.

**Components**

### `Head` Class

* **Summary**: A single head of self-attention in the transformer block.
* **Init**: `__init__(self, head_size)`: Initializes the head with the specified `head_size`.
* **Forward**: `forward(self, x)`: Computes the self-attention weights and applies them to the input `x`.
	+ Input: `x` (Tensor): Input tensor of shape `(batch_size, sequence_length, embedding_dim)`.
	+ Output: `out` (Tensor): Output tensor of shape `(batch_size, sequence_length, head_size)`.

### `MultiHeadAttention` Class

* **Summary**: A module that combines multiple heads of self-attention in parallel.
* **Init**: `__init__(self, num_heads, head_size)`: Initializes the module with the specified `num_heads` and `head_size`.
* **Forward**: `forward(self, x)`: Computes the self-attention weights and applies them to the input `x`.
	+ Input: `x` (Tensor): Input tensor of shape `(batch_size, sequence_length, embedding_dim)`.
	+ Output: `out` (Tensor): Output tensor of shape `(batch_size, sequence_length, embedding_dim)`.

### `FeedForward` Class

* **Summary**: A feed-forward neural network layer with a ReLU activation function and dropout.
* **Init**: `__init__(self, n_embd)`: Initializes the layer with the specified `n_embd`.
* **Forward**: `forward(self, x)`: Applies the feed-forward network to the input `x`.
	+ Input: `x` (Tensor): Input tensor of shape `(batch_size, sequence_length, embedding_dim)`.
	+ Output: `out` (Tensor): Output tensor of shape `(batch_size, sequence_length, embedding_dim)`.

### `Block` Class

* **Summary**: A transformer block that consists of a self-attention module and a feed-forward network.
* **Init**: `__init__(self, n_embd, n_head)`: Initializes the block with the specified `n_embd` and `n_head`.
* **Forward**: `forward(self, x)`: Applies the self-attention module and feed-forward network to the input `x`.
	+ Input: `x` (Tensor): Input tensor of shape `(batch_size, sequence_length, embedding_dim)`.
	+ Output: `out` (Tensor): Output tensor of shape `(batch_size, sequence_length, embedding_dim)`.

### `GPTLanguageModel` Class

* **Summary**: The GPT language model that generates text based on a given prompt.
* **Init**: `__init__(self, vocab_size)`: Initializes the model with the specified `vocab_size`.
* **Forward**: `forward(self, index, targets=None)`: Computes the output logits and loss for the given input `index`.
	+ Input: `index` (Tensor): Input tensor of shape `(batch_size, sequence_length)`.
	+ Input: `targets` (Tensor): Optional target tensor of shape `(batch_size, sequence_length)` for training.
	+ Output: `logits` (Tensor): Output tensor of shape `(batch_size, sequence_length, vocab_size)`.
	+ Output: `loss` (Scalar): Loss value for training.

### `generate` Method

* **Summary**: Generates text based on a given prompt.
* **Input**: `index` (Tensor): Input tensor of shape `(batch_size, sequence_length)`.
* **Input**: `max_new_tokens` (int): Maximum number of new tokens to generate.
* **Output**: `generated_chars` (String): Generated text as a string.

**Examples**

### Training the Model

```
model = GPTLanguageModel(vocab_size)
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
model.to(device)
optimizer = torch.optim.AdamW(model.parameters(), lr=learning_rate)

for iter in range(max_iters):
    xb, yb = get_batch('train')
    logits, loss = model.forward(xb, yb)
    optimizer.zero_grad(set_to_none=True)
    loss.backward()
    optimizer.step()
    print(f"step: {iter}, loss: {loss.item():.3f}")
```

### Generating Text

```
prompt = 'Hello! Can you see me?'
context = torch.tensor